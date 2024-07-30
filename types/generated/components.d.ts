import type { Schema, Attribute } from '@strapi/strapi';

export interface ComponentsReviews extends Schema.Component {
  collectionName: 'components_components_reviews';
  info: {
    displayName: 'Reviews';
  };
  attributes: {
    Name: Attribute.String & Attribute.Required;
    ReviewText: Attribute.Text;
    AggregateScore: Attribute.Decimal;
    ReviewPostedAt: Attribute.DateTime;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'components.reviews': ComponentsReviews;
    }
  }
}
