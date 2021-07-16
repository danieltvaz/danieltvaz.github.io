import CertificatesGrid from "../components/CertificatesGrid";
import Title from "../components/SectionTitle";
import ContentWrapper from "./wrappers/ContentWrapper";

export default function Certificates() {
  return (
    <ContentWrapper>
      <Title>Certificados</Title>
      <CertificatesGrid />
    </ContentWrapper>
  );
}
