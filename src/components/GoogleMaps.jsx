function GoogleMaps() {
  return (
    <div className="mt-10 flex w-full justify-center px-6">
      <a
        href="https://maps.app.goo.gl/c8Jqv6v9VwXZQ9s7A"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex min-h-12 items-center gap-2 rounded-xl bg-blue-500 px-6 py-3 font-semibold text-white shadow-sm transition hover:bg-blue-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 focus-visible:ring-offset-2"
      >
        <span aria-hidden="true">📍</span>
        <span>Open in Google Maps</span>
      </a>
    </div>
  );
}

export default GoogleMaps;
