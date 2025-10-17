import Section from "../components/Section";

export default function Home() {
  return (
    <div className="my-4">
      <h2 className="text-5xl font-bold text-center">Lista de Produtos</h2>
      <Section title="Eletronicos" category={"electronics"} />
      <Section title="Roupas" category={"jewelery"} />
      <Section title="Joias" category={"women's clothing"} />
    </div>
  );
}
