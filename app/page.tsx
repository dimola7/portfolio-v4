"use client";
import Layout from "./components/Layout/Layout";
import HomeHeader from "./components/HomeHeader";
import Projects from "./components/Projects";

export default function Home() {

  return (
    <Layout>
      <HomeHeader />
      <Projects />
    </Layout>
  );
}
