export default {
	name: "abouts",
	title: "Abouts",
	type: "document",
	fields: [
		{
			name: "title",
			title: "Title",
			type: "string",
		},
		{
			name: "frtitle",
			title: "French Title",
			type: "string",
		},
		{
			name: "frDescription",
			title: "French Description",
			type: "string",
		},
		{
			name: "description",
			title: "Description",
			type: "string",
		},
		{
			name: "imgUrl",
			title: "ImgUrl",
			type: "image",
			options: {
				hotspot: true,
			},
		},
	],
};
