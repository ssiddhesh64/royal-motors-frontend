export function navigationMenuReducer(openPath, action) {
  if (action.type === 'close') return null;
  if (action.type === 'toggle') {
    if (
      openPath?.pathname === action.pathname &&
      openPath?.locationKey === action.locationKey
    ) {
      return null;
    }
    return { pathname: action.pathname, locationKey: action.locationKey };
  }
  return openPath;
}

export function isNavigationMenuOpen(openPath, pathname, locationKey) {
  return (
    openPath !== null &&
    openPath.pathname === pathname &&
    openPath.locationKey === locationKey
  );
}
