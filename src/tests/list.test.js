import React from "react";
import renderer from "react-test-renderer";
import QuestList from "../components/QuestList";

const questsList = [
	{
    questname: "quest1",
    quest: "this is the first quest",
	},
	{
    questname: "quest2",
    quest: "this is the second quest",
	},
	{
    questname: "quest3",
    quest: "this is the third quest",
	},
];

it("renders correctly", () => {
	const tree = renderer.create(<QuestList userInfo={questsList} />).toJSON();
	expect(tree).toMatchSnapshot();
});
