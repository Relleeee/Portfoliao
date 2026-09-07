/** Three slow-drifting colour blobs behind everything. Pure CSS — see globals.css. */
export function AuroraBackground() {
  return (
    <div className="aurora" aria-hidden="true">
      <span className="aurora-blob" />
      <span className="aurora-blob" />
      <span className="aurora-blob" />
    </div>
  );
}
