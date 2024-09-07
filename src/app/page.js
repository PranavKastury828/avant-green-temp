import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h2>Deployment in progress...</h2>
        <h1>Please check the url <a href='https://avant-green.netlify.app'>avant-green.netlify.app</a> in sometime</h1>
      </main>
    </div>
  );
}
