import { Toolbar } from "primereact/toolbar";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";

const Header = () => {
  const startContent = <h1 className="m-0">E-Commerce</h1>;

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
