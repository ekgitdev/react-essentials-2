
/** ...props  - grops forwarded other forwarded props like section id*/
const Section = ({ title, children, ...props }) => {
  return (
    /**spread operator ...props to unpack them - id in this case */
    <section {...props}>
      <h2>{title}</h2>
      {children}
    </section>
  );
};
export default Section;
