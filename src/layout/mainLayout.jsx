import NavbarMenu from "@/layout/widgets/navbar";
import { MENU_SIMPLE } from "@/helper/const/menu";

export default function MainLayout({ children }) {
  return (
    <div className="backgroud">
      <NavbarMenu menu={MENU_SIMPLE} />
      {children}
    </div>
  );
}
