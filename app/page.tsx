import Button from "./_components/button";
import ContentWrapper from "./_utils/content-wrapper";

export default function Home() {
  return (
    <main>
      <ContentWrapper>
        <h1>Heading</h1>
        <h3>Subheading</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
          dolor assumenda commodi praesentium dolorum. Nobis sit, nemo amet
          ducimus sequi vel, a asperiores voluptatibus ullam ex, ipsam est
          quibusdam fuga tempore sapiente laboriosam perferendis excepturi et
          architecto doloremque itaque hic quam. Dolore molestias exercitationem
          debitis voluptatum atque earum laudantium iste sed, enim rerum facere.
          Fugit quae tenetur est mollitia libero possimus, impedit nam saepe
          enim corporis voluptates, repudiandae dicta nesciunt labore voluptas?
          Hic nihil eligendi delectus autem modi itaque ab cumque voluptatibus
          accusantium quas error natus, aut temporibus obcaecati, reprehenderit
          eum distinctio! Velit sint totam nostrum incidunt provident. Id, sint.
        </p>
        <Button normalButton typeSubmit url="">
          Click me
        </Button>
      </ContentWrapper>
    </main>
  );
}
