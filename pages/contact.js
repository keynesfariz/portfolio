import Layout from "components/common/Layout";
import Image from "next/image";

export default function Contact() {
  return (
    <Layout meta={{ title: "Contact" }}>
      <p className="lead">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi,
        similique! Lorem ipsum dolor sit amet.
      </p>
      <h1 className="">
        Hey There, I am{" "}
        <span className="underline decoration-sky-500">Fariz</span>, a Software
        Engineer specialized in{" "}
        <span className="underline decoration-rose-500">Web-Based Apps</span>
      </h1>
      <div className="relative aspect-[2/1] w-full">
        <Image
          src="https://images.unsplash.com/photo-1556740758-90de374c12ad?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80"
          objectFit="cover"
          layout="fill"
          alt="Image ALT"
        />
      </div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat ut eius
        qui praesentium, reprehenderit alias dignissimos molestiae maxime ab,
        sit harum enim, quod cum commodi? Placeat quidem mollitia tempora
        voluptate, perspiciatis ullam earum rem, vel perferendis eaque deserunt,
        explicabo cupiditate? Magnam dolorum praesentium fugit tenetur atque. Ab
        repellat quas earum.
      </p>
      <p>
        In magnam laboriosam dolor enim suscipit, expedita laborum hic numquam
        accusantium necessitatibus nulla molestiae. Placeat distinctio mollitia
        voluptates dignissimos veritatis ab quas facilis. Iste fugit sapiente
        maxime officia non reiciendis consectetur ipsam pariatur. Soluta
        blanditiis animi enim quia reprehenderit consequatur nobis magni amet
        temporibus quibusdam assumenda fuga sequi, accusantium praesentium.
      </p>
      <p>
        Optio consequatur quibusdam corporis reiciendis hic dolorem cum natus
        laborum dolor modi quo fugiat iusto, maiores quia dicta accusamus
        reprehenderit qui est nisi illum! Repellendus sed minus ut modi vel quo
        iusto aliquid in repudiandae asperiores expedita ipsum aperiam maiores
        aspernatur odio sint, dolorum, quos neque? Nobis voluptatem
        necessitatibus porro?
      </p>
    </Layout>
  );
}
