import React from 'react';
import AppLayout from "../components/AppLayout";
import Head from 'next/head'
import NicknameEditForm from "../components/NicknameEditForm";
import FollowList from "../components/FollowList";


const Profile = () => {
  const followerList = [{nickname:'peach'}, {nickname:'autumn'},{nickname:'aris'}];
  const followingList = [{nickname:'peach'}, {nickname:'autumn'},{nickname:'aris'}];

  return (
  <>
   <Head>
    <title>profile</title>
  </Head>
  <AppLayout>
    <NicknameEditForm/>
    <FollowList header="팔로잉 목록" data={followingList}></FollowList>
    <FollowList header="팔로워 목록" data={followerList}></FollowList>
  </AppLayout>
  </>
   )
};

export default Profile;