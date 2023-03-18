import Navigation from "@/app/components/navigation";

export default function Layout({ children }) {
  return (
    <>
      <Navigation />
      {children}
    </>
  )
}
