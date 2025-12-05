import { StaticImageData } from "next/image"
import { CommentType } from "@/types/comments"

// Import your images
import user1 from "../../../public/user2.jpeg"
import user2 from "../../../public/user3.jpeg"
import user3 from "../../../public/user4.jpeg"
import user4 from "../../../public/user5.jpeg"

export const comments: CommentType[] = [
  {
    id: 1,
    author: "Sarah Miller",
    author_profile: user1,
    time: "2 hours ago",
    content: "Great tutorial! Have you considered integrating with Semaphore for anonymous signaling? It could provide additional privacy guarantees for the voting process. ```solidity // Example integration ISemaphore semaphore = ISemaphore(semaphoreAddress); semaphore.verifyProof(proof, merkleTreeDepth, signal); ```",
    work: "Senior Security Researcher",
    upvotes: 56,
    downvotes: 2,
    replies_count: 2,
    replies: [
      {
        id: 1,
        author: "Mike Rodriguez",
        author_profile: user4,
        time: "3 hours ago",
        content: "Excellent implementation! One suggestion: you might want to add a timelock for vote revealing to prevent last-minute manipulation attacks. Also, consider using EIP-712 for typed structured data signing when registering voters.",
        work: "DevRel@Ethereum",
        upvotes: 1,
        downvotes: 0,
        replies_count: 1,
        replies: [
          {
            id: 1,
            author: "Sarah Miller",
            author_profile: user1,
            time: "2 hours ago",
            content: "Thanks for the suggestion! I'll definitely add a timelock in the next version. EIP-712 is a great idea for better UX.",
            work: "Senior Security Researcher",
            upvotes: 3,
            downvotes: 0,
            replies_count: 0,
          }
        ]
      },
      {
        id: 2,
        author: "Alex Chen",
        author_profile: user2,
        time: "1 hour ago",
        content: "I've implemented something similar. One challenge I faced was with voter anonymity during registration. How did you handle that?",
        work: "Blockchain Engineer @Uniswap",
        upvotes: 3,
        downvotes: 0,
        replies_count: 0,
      }
    ]
  },
  {
    id: 2,
    author: "Alex Chen",
    author_profile: user2,
    time: "5 hours ago",
    content: "Nice work! The gas optimization section is particularly helpful. Have you benchmarked this against other voting implementations? I'd be curious to see how it compares to OpenZeppelin's Governor contract.",
    work: "Blockchain Engineer @Uniswap",
    upvotes: 42,
    downvotes: 3,
    replies_count: 2,
    replies: [
      {
        id: 1,
        author: "Priya Sharma",
        author_profile: user3,
        time: "4 hours ago",
        content: "Great question! I did some benchmarking and found it's about 15% more gas-efficient for small elections (<100 voters). For larger ones, the difference becomes more significant due to the Merkle tree optimizations.",
        work: "Smart Contract Auditor",
        upvotes: 8,
        downvotes: 0,
        replies_count: 1,
        replies: [
          {
            id: 1,
            author: "Marcus Johnson",
            author_profile: user1,
            time: "2 hours ago",
            content: "Thanks for sharing those numbers! Did you also test with different proving systems? I'm curious if using Groth16 instead of PLONK would make a difference for the zk-SNARK component.",
            work: "ZK Researcher",
            upvotes: 4,
            downvotes: 0,
            replies_count: 1,
            replies: [
              {
                id: 1,
                author: "Priya Sharma",
                author_profile: user3,
                time: "1 hour ago",
                content: "Yes! Groth16 was about 20% faster for proof generation but PLONK had better verification gas costs. It depends on your specific use case.",
                work: "Smart Contract Auditor",
                upvotes: 2,
                downvotes: 0,
                replies_count: 0,
              }
            ]
          }
        ]
      },
      {
        id: 2,
        author: "David Wilson",
        author_profile: user4,
        time: "2 hours ago",
        content: "I tested with 500 voters and saw ~35% gas savings. The zk-SNARK component does add overhead though.",
        work: "DAO Founder",
        upvotes: 4,
        downvotes: 0,
        replies_count: 0,
      }
    ]
  },
  {
    id: 3,
    author: "David Wilson",
    author_profile: user4,
    time: "1 day ago",
    content: "I've been looking for a comprehensive tutorial on private voting. This is exactly what I needed for my DAO's governance overhaul. The section on preventing coercion is particularly insightful.",
    work: "DAO Founder",
    upvotes: 28,
    downvotes: 1,
    replies_count: 0,
    replies: []
  },
  {
    id: 4,
    author: "Elena Rodriguez",
    author_profile: user3,
    time: "3 hours ago",
    content: "The UI/UX considerations section is spot on. Many voting systems fail because they're too complex for average users. Have you considered adding a mobile-friendly interface for this?",
    work: "Product Designer @MetaMask",
    upvotes: 35,
    downvotes: 2,
    replies_count: 3,
    replies: [
      {
        id: 1,
        author: "Thomas Kim",
        author_profile: user2,
        time: "2 hours ago",
        content: "Mobile support is definitely on the roadmap! We're working on a React Native wrapper that will make it accessible on mobile devices.",
        work: "Frontend Lead",
        upvotes: 12,
        downvotes: 0,
        replies_count: 2,
        replies: [
          {
            id: 1,
            author: "Lisa Wang",
            author_profile: user1,
            time: "1 hour ago",
            content: "That's exciting! Would love to contribute to the mobile implementation. Are you using Expo or bare React Native?",
            work: "Mobile Dev @Coinbase",
            upvotes: 6,
            downvotes: 0,
            replies_count: 1,
            replies: [
              {
                id: 1,
                author: "Thomas Kim",
                author_profile: user2,
                time: "30 minutes ago",
                content: "We're starting with Expo for rapid prototyping but might switch to bare RN for production. Would love your input!",
                work: "Frontend Lead",
                upvotes: 3,
                downvotes: 0,
                replies_count: 0,
              }
            ]
          },
          {
            id: 2,
            author: "Robert Lee",
            author_profile: user4,
            time: "45 minutes ago",
            content: "We're building a companion mobile app. Would love to collaborate on this!",
            work: "App Developer",
            upvotes: 3,
            downvotes: 0,
            replies_count: 0,
          }
        ]
      },
      {
        id: 2,
        author: "Mark Taylor",
        author_profile: user1,
        time: "1 hour ago",
        content: "I totally agree! The current voting interfaces are too technical. A mobile-first approach would help adoption.",
        work: "UX Designer",
        upvotes: 6,
        downvotes: 0,
        replies_count: 0,
      }
    ]
  }
]