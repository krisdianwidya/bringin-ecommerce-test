import { Toolbar } from "primereact/toolbar";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Badge } from "primereact/badge";
import { Link } from "react-router-dom";

import { useFetchCartUser } from "../hooks/useFetchCartUser";

const Header = () => {
  const { isLoading, data, error } = useFetchCartUser();

  if (isLoading) return <h1>Loading</h1>;

  if (error) return <h1>Error</h1>;

  const startContent = (
    <Link to={"/"}>
      <h1 className="m-0 no-underline text-primary">E-Commerce</h1>
    </Link>
  );

  const centerContent = (
    <div className="p-inputgroup flex-1">
      <InputText style={{ width: "100%" }} placeholder="Buy your needs" />

      <Button icon="pi pi-search" />
    </div>
  );

  const endContent = (
    <Link to={"/cart"}>
      <Button icon="pi pi-shopping-cart">
        <Badge value={data.products.length} severity="danger"></Badge>
      </Button>
    </Link>
  );

  return (
    <div className="card">
      <Toolbar
        pt={{
          center: { style: { width: "800px" } },
        }}
        start={startContent}
        center={centerContent}
        end={endContent}
      />
    </div>
  );
};

export default Header;
