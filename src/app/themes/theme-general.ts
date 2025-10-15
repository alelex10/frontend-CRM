export const styleScrollbar = (colors: any) => ({
	//? COLOR DE FONDO
	"&::-webkit-scrollbar, & *::-webkit-scrollbar": {
		// .backgroundColor: "#2b2b2b",
		backgroundColor: colors.color9,
	},
	// "&::-webkit-scrollbar-track, & *::-webkit-scrollbar-track": {
	//   backgroundColor: "#2b2b2b",
	// },
	"&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb": {
		borderRadius: 0,
		//? COLOR DE LA BARRA
		// .backgroundColor: "#6b6b6b",
		backgroundColor: colors.color5,
		//? COLOR DEL BORDE DE LA BARRA
		// .border: "3px solid #2b2b2b",
		border: `0px solid ${colors.color10}`,
	},
	//? COLOR DEL HOVER
	"&::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover": {
		backgroundColor: colors.color7,
	},
});
