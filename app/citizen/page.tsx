import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DomainPage } from "@/components/domain-page";
import { getDomain } from "@/content/site";

const domain = getDomain("citizen");

export const metadata: Metadata = {
  title: domain?.title,
  description: domain?.description,
};

export default function CitizenPage() {
  if (!domain) notFound();
  return <DomainPage domain={domain} />;
}
