import industries from "@/data/industries.json";
import IndustryPage from "@/components/industries/industry";

export const metadata = {
  title: industries.retail.title,
};

export default function Page() {
  return <IndustryPage data={industries.retail} />;
}
