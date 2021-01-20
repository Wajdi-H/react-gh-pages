import React, { Component } from "react";
import MapContainer from "./maps";

class Contact extends Component {
render() {
return (
<div>
<h2>GOT QUESTIONS?</h2>
<p>The easiest thing to do is post on
our <a href="http://forum.kirupa.com">forums</a>.
</p>
<MapContainer/>
</div>
);
}
}
export default Contact;