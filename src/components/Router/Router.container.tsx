import React, { FunctionComponent } from 'react';
import { RouterPublicProps } from './Router.props';
import useSelectorSafe from "store/selectors/useSelectorSafe";
import LazyComponent from "../LazyComponent/LazyComponent";

const RouterContainer: FunctionComponent<RouterPublicProps> = (
  props: RouterPublicProps,
) => {
  const location = useSelectorSafe<string>((state) => state.location.type, '');

  return LazyComponent(
    `routes/${props.components[location].component}`,
    {
      route: props.components[location],
    },
  );
};

export default RouterContainer;