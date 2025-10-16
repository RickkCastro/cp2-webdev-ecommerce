export default function Navbar() {
  return (
    <nav className="bg-yellow-400 text-black px-6 py-4 flex justify-between items-center">
      <h1 className="font-bold text-xl">Fiap Commerce</h1>
      <div className="flex gap-4">
        <a href="/" className="hover:underline">
          Home
        </a>
        <a href="/profile" className="hover:underline">
          Perfil
        </a>
        <a href="/cart" className="hover:underline">
          Carrinho
        </a>
      </div>
    </nav>
  );
}
