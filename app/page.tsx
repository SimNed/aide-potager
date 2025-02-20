import Section from "@/components/Section";
import { Button } from "@/components/shadcn-ui/button";
import helloWorld from "@/lib/db";

export default async function HomePage() {
  return (
    <Section
      variant="lg"
      className="h-full flex flex-col justify-center items-center space-y-28 text-5xl font-bold"
    >
      <h1 className="my-4">Aide potager</h1>
      <Button className="rounded-full">commencer</Button>
    </Section>
  );
}
