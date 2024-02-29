import { Toolbar } from "primereact/toolbar";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Link } from "react-router-dom";

const Header = () => {
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

  const endContent = <Button icon="pi pi-shopping-cart" />;

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
