import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import Codex from '@/components/Codex';
import Workshop from '@/components/Workshop';
import Manifesto from '@/components/Manifesto';
import Correspondence from '@/components/Correspondence';
import ScrollReveal from '@/components/ScrollReveal';

function Divider() {
  return (
    <div className="divider" aria-hidden="true">
      <span className="line" />
      <span className="ornament">❦</span>
      <span className="line" />
    </div>
  );
}

export default function Page() {
  return (
    <>
      <Nav />

      <main>
        <Hero />
        <Divider />
        <Codex />
        <Divider />
        <Workshop />
        <Divider />
        <Manifesto />
        <Divider />
        <Correspondence />
      </main>

      <ScrollReveal />
    </>
  );
}
