import { Navbar } from '../../components/navbar/Navbar';

export default function GeneralLayout({
 children
}: {
 children: React.ReactNode;
}) {
  return (
    <>
    <Navbar></Navbar>
    <div className="flex flex-col items-center">    </div>

      <main className="flex flex-col items-center p-24">
      <span className="text-lg">Hola Mundo</span>
      {children}
      </main>
    </>

  );
}