import AppLayout from "../components/AppLayout";
import Head from 'next/head'

const Home = () => {
  return (<AppLayout>
    <Head>
      <meta charset="utf-8"/>
      <title>Hello</title>
    </Head>
    <div>Hello!</div></AppLayout>)
}

export default Home;