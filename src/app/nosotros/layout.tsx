import FooterSection from "@/components/footer-section";

export default function EmpresasLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div>{children}</div>
      <FooterSection />
    </>
  );
}
