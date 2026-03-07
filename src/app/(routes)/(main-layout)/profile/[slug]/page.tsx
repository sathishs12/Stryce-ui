import ProfilePage from "@/modules/view-profile/templates";

export default function Page({ params }: { params: { slug: string } }) {
  // In a real app, you would fetch data here using params.slug
  return <ProfilePage />;
}