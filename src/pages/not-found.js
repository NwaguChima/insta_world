import { useEffect } from "react";

export default function NotFound() {
  useEffect(() => {
    document.title = "Not Found - Insta-world";
  }, []);

  return (
    <div className="bg-grey-background">
      <div className="mx-auth max-w-screen-lg">
        <p className="text-center text-2xl">Not Found!</p>
      </div>
    </div>
  );
}