import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/react";
import { useLocation } from "react-router-dom";

interface CustomBreadcrumbProps {
  title: string;
  img: string;
}

export default function CustomBreadcrumb(props: CustomBreadcrumbProps) {
  const location = useLocation();

  return (
    <>
      <section
        className="relative bg-cover bg-center px-20 pb-10 pt-0"
        style={{ backgroundImage: `url(${props.img})` }}
      >
        <div className="absolute inset-0 z-10 bg-black/80" />

        {/* content */}
        <div className="box-center relative z-10 h-52 w-full pt-16 text-white">
          <div className="text-center">
            <h1 className="mb-4 text-5xl font-bold">{props.title}</h1>

            <div className="box-center">
              <Breadcrumbs color="primary">
                <BreadcrumbItem href="/">Home</BreadcrumbItem>
                <BreadcrumbItem href={location.pathname}>
                  {props.title}
                </BreadcrumbItem>
              </Breadcrumbs>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
