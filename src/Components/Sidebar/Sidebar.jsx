import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
} from "@material-tailwind/react";
import { PresentationChartBarIcon, eye } from "@heroicons/react/24/outline";

const Sidebar = () => {
  return (
    <div>
      <Card className="h-screen w-16 max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5 bg-white">
        <div>
          <PresentationChartBarIcon />
        </div>
      </Card>
    </div>
  );
};

export default Sidebar;
