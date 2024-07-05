import { Typography } from "@material-tailwind/react";

const LINKS = [
  {
    title: "Explore Products",
    items: ["Overview", "Features", "Solutions", "Tutorials"],
  },
  {
    title: "Company",
    items: ["About us", "Careers", "Press", "News"],
  },
  {
    title: "Resources",
    items: ["Blog", "Newsletter", "Events", "Help center"],
  },
];
const currentYear = new Date().getFullYear();

function Footer() {
  return (
    <footer className="relative w-full">
      {" "}
      {/* Removed min-h-screen from footer */}
      <div className="mx-auto w-full max-w-7xl px-8 flex flex-col justify-between h-full">
        <div className="flex-grow">
          {" "}
          {/* Added flex-grow: 1 to main content section */}
          {/* Your main page content goes here */}
          <Typography variant="h5" className="mb-6">
            EPICFOODS
          </Typography>
          <div className="grid grid-cols-3 justify-between gap-4">
            {LINKS.map(({ title, items }) => (
              <ul key={title}>
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="mb-3 font-medium opacity-40"
                >
                  {title}
                </Typography>
                {items.map((link) => (
                  <li key={link}>
                    <Typography
                      as="a"
                      className="py-1.5 font-normal transition-colors hover:text-blue-gray-900"
                    >
                      {link}
                    </Typography>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </div>
        <div
          className="font-normal text-blue-gray-900 text-center mt-6"
        >
          &copy; {currentYear}{" "}
          <a href="https://material-tailwind.com/">EPICFOODS</a>. All Rights
          Reserved.
        </div>
    </footer>
  );
}
export default Footer;
