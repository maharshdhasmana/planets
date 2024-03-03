/* eslint-disable react/prop-types */
import {
  Mercury,
  Venus,
  Earth,
  Mars,
  Jupitor,
  Saturn,
  Uranus,
  Neptune,
} from "../Assets/index.js";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Image,
} from "@nextui-org/react";
const SearchResultCard = ({ planet }) => {
  return (
    <Card isPressable={true} className="max-w-[400px] ">
      <CardHeader className="flex gap-3">
        <Image
          alt="nextui logo"
          height={40}
          width={40}
          className="w-[40px] h-[40px]"
          radius="sm"
          src={
            planet.name === "Mercury"
              ? Mercury
              : planet.name === "Venus"
              ? Venus
              : planet.name === "Earth"
              ? Earth
              : planet.name === "Mars"
              ? Mars
              : planet.name === "Jupitor"
              ? Jupitor
              : planet.name === "Saturn"
              ? Saturn
              : planet.name === "Uranus"
              ? Uranus
              : planet.name === "Neptune"
              ? Neptune
              : ""
          }
        />
        <div className="flex flex-col">
          <p className="text-md">
            {planet.name === "Jupitor" ? "Jupiter" : planet.name}
          </p>
        </div>
      </CardHeader>
      <Divider />
      <CardBody>
        <p>
          {planet.name} is a{" "}
          {planet.shape === "4aaaf39b-eccb-46d6-b4be-2e72a911c724"
            ? "Round"
            : "Oval"}{" "}
          Planet with{" "}
          {planet.color === "90f28316-7f0d-4cf2-828e-f0dbbcc110b9"
            ? "Red"
            : planet.color === "7526a44b-32d3-4644-b28d-8eb57e5fada6"
            ? "Green"
            : planet.color === "fe228419-f7df-49d2-a4cd-43e625b26075"
            ? "Blue"
            : ""}{" "}
          color and{" "}
          {planet.size === "3cc158c7-eff6-4152-afa3-50d9487584c3"
            ? "Small"
            : planet.size === "96d37388-6ca9-4aba-bc2a-dafeb082fbd9"
            ? "Medium"
            : planet.size === "65f33b82-48dc-4265-88cb-f4f467e5acba"
            ? "Large"
            : ""}{" "}
          size
        </p>
      </CardBody>
      <Divider />
      <CardFooter>
        <Link
          isExternal
          showAnchorIcon
          target="_blank"
          href={`https://en.wikipedia.org/wiki/${
            planet.name === "Jupitor" ? "Jupiter" : planet.name
          }`}
        >
          About {planet.name === "Jupitor" ? "Jupiter" : planet.name} on
          Wikipedia.
        </Link>
      </CardFooter>
    </Card>
  );
};

export default SearchResultCard;
