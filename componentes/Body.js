import React from "react";
import { Text, View, Image } from "react-native";

const Body = () => {
	return (
		<View
			style={{
				padding: 20,
				flex: 1,
				flexDirection: "row",
				flexWrap: "wrap",
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<Text style={{ width: "70%", paddingLeft: 20, paddingRight: 20 }}>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nisl
				ipsum, egestas a est at, dictum commodo est. Maecenas sed justo in eros
				dapibus interdum. Pellentesque interdum dui nec dapibus interdum. In
				congue cursus justo vel porttitor. Integer pulvinar interdum fermentum.
				Vestibulum pellentesque convallis vulputate. Duis nisi dui, sollicitudin
				porttitor erat non, rutrum venenatis est. Nullam mollis accumsan
				viverra. Nam at felis sodales, laoreet eros nec, laoreet justo. Proin
				vel felis pharetra, maximus nisl nec, volutpat massa. Pellentesque at
				nibh eget nulla efficitur hendrerit cursus id ipsum. Pellentesque non
				dolor tincidunt, consequat nulla nec, fermentum arcu. Vestibulum
				pulvinar eleifend ex non ullamcorper. Nulla egestas, metus at ultricies
				accumsan, urna magna fringilla ex, vitae eleifend turpis augue ut nibh.
				Duis et risus ornare, finibus erat et, suscipit tellus. In dapibus
				volutpat lacus, ut rhoncus erat luctus tincidunt.
			</Text>
			<Image
				source={{ uri: "https://reactjs.org/logo-og.png" }}
				style={{ width: 90, height: 90 }}
			/>
		</View>
	);
};

export default Body;
