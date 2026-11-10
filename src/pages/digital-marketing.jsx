import ServiceRedirect from "@/components/service-page/ServiceRedirect";

// The homepage now lives at "/". Kept so old links and search results still resolve.
export default function Page() {
  return <ServiceRedirect to="/" />;
}
