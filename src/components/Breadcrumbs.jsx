import { Link, useLocation } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";

export default function Breadcrumbs() {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  // Se estiver na Home, não mostra nada
  if (location.pathname === "/") {
    return null;
  }

  return (
    <nav className="flex text-gray-600 text-sm mb-4" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-2">
        <li>
          <Link to="/" className="hover:text-blue-600">
            Home
          </Link>
        </li>
        {pathnames.map((name, idx) => {
          const routeTo = "/" + pathnames.slice(0, idx + 1).join("/");
          const isLast = idx === pathnames.length - 1;

          return (
            <li key={idx} className="inline-flex items-center">
              <FaChevronRight className="mx-2 text-gray-400" size={12} />
              {isLast ? (
                <span className="font-semibold text-gray-800 capitalize">
                  {name.replace("-", " ")}
                </span>
              ) : (
                <Link to={routeTo} className="hover:text-blue-600 capitalize">
                  {name.replace("-", " ")}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
