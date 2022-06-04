import Link from "next/link";
import { 
  HStack,
  Heading,
  Text,
} from "@chakra-ui/react";

export default function PostFeed({posts, admin}) {
  return posts ? posts.map((post) => <PostItem post={post} key={post.slug} admin={admin} />) : null;
}

function PostItem({ post, admin=false }) {
  const wordCount = post?.content.trim();
  const minutesToRead = (wordCount / 100 + 1).toFixed(0);

  return (
    <HStack>
      <Link href={`/${post.username}`}>
        <Heading fontWeight="bold">By @{post.username}</Heading>
      </Link>
      <Link href={`/${post.username}/${post.slug}`}>
        <Heading>{post.title}</Heading>
      </Link>
      <Text>
        {wordCount} words. {minutesToRead} min read
      </Text>
    </HStack>
  );
}
