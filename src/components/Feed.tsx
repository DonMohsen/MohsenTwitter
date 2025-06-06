import { prisma } from "@/prisma";
import Post from "./Post"
import { auth } from "@clerk/nextjs/server";

const Feed = async({userProfileId}:{userProfileId?:string}) => {
  const{userId}=await auth()
if(!userId){
  return
}
// const followings=await prisma.follow.findMany({where:{followerId:userId},select:{followingId:true}});
// console.log("followings:::::::",followings);

 const whereConditions=userProfileId?{parentPostId:null,userId:userProfileId}:{parentPostId:null, userId:{
  in:[userId,...((await prisma.follow.findMany({where:{followerId:userId},select:{followingId:true}})).map((following)=>following.followingId)),]
 }}
const posts=await prisma.post.findMany({where:whereConditions})
  console.log(posts);
  
  return (
    <div className=''>
   {posts.map((post)=>(
    <div key={post.id}>
      <Post/>
    </div>
   ))}
    </div>
  )
}

export default Feed