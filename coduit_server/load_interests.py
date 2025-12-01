# load_interests.py  (FINAL VERSION – SAFE FOREVER)
import os
import django
from django.utils.text import slugify

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "config.settings")
django.setup()

from interests.models import InterestCategory, InterestModel

# ===================================================================
# DATA
# ===================================================================
categories_data = {
    "Programming Languages": [
        "Python", "JavaScript", "Java", "C++", "Rust", "Go", "TypeScript", "Kotlin", "Swift", "Ruby", "PHP", "Scala", "C#", "R", "Dart"
    ],
    "Web Development": [
        "React", "Angular", "Vue.js", "Node.js", "HTML/CSS", "Next.js", "Svelte", "Express.js", "Tailwind CSS",
        "Bootstrap", "WebAssembly", "GraphQL", "Nuxt.js", "Astro"
    ],
    "AI & Machine Learning": [
        "Machine Learning", "Deep Learning", "Neural Networks", "Natural Language Processing", "Computer Vision",
        "Reinforcement Learning", "TensorFlow", "PyTorch", "Scikit-learn", "Generative AI", "AI Ethics", "Transfer Learning",
        "LangChain", "Hugging Face"
    ],
    "DevOps & Cloud": [
        "Docker", "Kubernetes", "AWS", "Azure", "CI/CD", "Terraform", "Jenkins", "GitHub Actions", "Cloud Security",
        "Microservices", "Serverless", "Ansible", "Prometheus", "Grafana", "ArgoCD"
    ],
    "Databases & Data Science": [
        "SQL", "NoSQL", "Big Data", "Data Analytics", "Pandas", "MongoDB", "PostgreSQL", "Hadoop", "Spark",
        "Data Visualization", "ETL Processes", "Redis", "Cassandra", "ClickHouse"
    ],
    "Mobile Development": [
        "Android", "iOS/Swift", "Flutter", "React Native", "Mobile UI/UX", "Kotlin", "Xamarin", "Jetpack Compose",
        "SwiftUI", "Firebase", "App Performance"
    ],
    "Security & Networking": [
        "Cybersecurity", "Ethical Hacking", "Networking", "Blockchain", "Cryptography", "Penetration Testing",
        "Firewall Configuration", "VPN Technologies", "Incident Response", "Malware Analysis", "Secure Coding", "Web3 Security"
    ],
    "Software Engineering": [
        "Agile/Scrum", "Design Patterns", "Testing/QA", "Open Source", "System Design", "GitHub", "Code Review",
        "Refactoring", "TDD/BDD", "Software Architecture", "Version Control", "Project Management"
    ],
    "Game Development": [
        "Unity", "Unreal Engine", "Godot", "C#", "Game Design", "Game Physics", "Shader Programming",
        "Blender", "3D Modeling", "Level Design", "Procedural Generation", "Multiplayer Networking",
        "VR/AR Development", "Game AI", "Pixel Art", "Lua"
    ],
    "Data Engineering": [
        "Data Pipelines", "Apache Airflow", "dbt", "Apache Spark", "Apache Kafka", "Snowflake",
        "Databricks", "Data Warehousing", "ELT/ETL", "Data Modeling", "BigQuery", "Redshift",
        "Delta Lake", "Apache Iceberg", "Fivetran", "Airbyte", "Data Lakehouse", "Stream Processing"
    ]
}

# ===================================================================
# HELPER: Generate unique slug
# ===================================================================
def unique_slug(instance, base_slug, max_length=200):
    """
    Returns a slug that doesn't exist in the DB yet.
    """
    slug = base_slug[:max_length]
    counter = 1
    while InterestModel.objects.filter(slug=slug).exists():
        suffix = f"-{counter}"
        slug = f"{base_slug[:max_length - len(suffix)]}{suffix}"
        counter += 1
    return slug

# ===================================================================
# MAIN LOAD FUNCTION
# ===================================================================
def load_data():
    print("Starting interests data load...")

    # 1. Create / Update Categories
    categories = {}
    for cat_name in categories_data.keys():
        category, created = InterestCategory.objects.get_or_create(
            name=cat_name,
            defaults={
                'slug': slugify(cat_name),
                'description': f'Everything about {cat_name.lower()}',
                'is_active': True,
            }
        )
        if not created:
            category.slug = slugify(cat_name)
            category.is_active = True
            category.save()
        categories[cat_name] = category
        print(f"Category: {category.name} {'(created)' if created else '(exists)'}")

    # 2. Create / Update Interests (with unique slugs!)
    popular_names = {
        "Python", "JavaScript", "React", "Docker", "AWS", "Kubernetes", "SQL", "Machine Learning",
        "Node.js", "TypeScript", "Cybersecurity", "GitHub Actions", "Unity", "Unreal Engine",
        "Apache Airflow", "dbt", "Snowflake", "Terraform"
    }

    for cat_name, interests_list in categories_data.items():
        category = categories[cat_name]
        for name in interests_list:
            # Generate safe base slug
            base_slug = slugify(name)

            # Try to get existing interest by name + category first
            existing = InterestModel.objects.filter(
                interest=name,
                category=category
            ).first()

            if existing:
                # Update only if needed
                if existing.slug != base_slug or existing.is_popular != (name in popular_names):
                    existing.slug = unique_slug(existing, base_slug)
                    existing.is_popular = name in popular_names
                    existing.save()
                print(f"Updated: {name}")
            else:
                # Create new with guaranteed unique slug
                new_slug = unique_slug(None, base_slug)
                InterestModel.objects.create(
                    interest=name,
                    slug=new_slug,
                    category=category,
                    is_popular=name in popular_names,
                )
                print(f"Created: {name} → {new_slug}")

    print("\nAll interests loaded successfully! Run as many times as you want – no errors!")

if __name__ == "__main__":
    load_data()