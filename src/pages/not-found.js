import { useEffect } from "react";
import Header from "../components/header";

export default function NotFound() {
  useEffect(() => {
    document.title = "Not Found - Insta-world";
  }, []);

  return (
    <div className="bg-grey-background">
      <Header />
      <div className="mx-auto max-w-screen-lg">
        <p className="text-center text-2xl">Not Found!</p>
      </div>
    </div>
  );
}
