import { gql } from "@apollo/client";

export const GET_PRODUCTS = gql`
	query Query {
		getFoods {
			id
			name
			imgUrl
		}
	}
`;

export const GET_PRODUCT_DETAIL = gql`
	query Query($getFoodByIdId: ID!) {
		getFoodById(id: $getFoodByIdId) {
			id
			name
			description
			price
			imgUrl
			UserMongoId
			categoryId
			user {
				userName
			}
			Category {
				name
			}
			Ingredients {
				name
			}
		}
	}
`;
