<h1>
relative-mouse <a href="https://npmjs.org/package/relative-mouse"><img src="https://img.shields.io/badge/npm-v1.0.1-F00.svg?colorA=000"/></a> <a href="src"><img src="https://img.shields.io/badge/loc-13-FFF.svg?colorA=000"/></a> <a href="https://cdn.jsdelivr.net/npm/relative-mouse@1.0.1/dist/relative-mouse.min.js"><img src="https://img.shields.io/badge/brotli-232b-333.svg?colorA=000"/></a> <a href="LICENSE"><img src="https://img.shields.io/badge/license-MIT-F0B.svg?colorA=000"/></a>
</h1>

<p></p>

Get mouse position relative to a DOM element.

<h4>
<table><tr><td title="Triple click to select and copy paste">
<code>npm i relative-mouse </code>
</td><td title="Triple click to select and copy paste">
<code>pnpm add relative-mouse </code>
</td><td title="Triple click to select and copy paste">
<code>yarn add relative-mouse</code>
</td></tr></table>
</h4>

## API

<p>  <details id="getRelativeMouse$8" title="Function" open><summary><span><a href="#getRelativeMouse$8">#</a></span>  <code><strong>getRelativeMouse</strong></code><em>(el, { x, y })</em>    </summary>  <a href="src/index.ts#L6">src/index.ts#L6</a>  <ul>    <p>    <details id="el$10" title="Parameter" ><summary><span><a href="#el$10">#</a></span>  <code><strong>el</strong></code>    </summary>    <ul><p><span>HTMLElement</span></p>        </ul></details><details id="pos$11" title="Parameter" ><summary><span><a href="#pos$11">#</a></span>  <code><strong>pos</strong></code>    </summary>    <ul><p>{<p>  <details id="x$13" title="Property" ><summary><span><a href="#x$13">#</a></span>  <code><strong>x</strong></code>    </summary>  <a href="src/index.ts#L6">src/index.ts#L6</a>  <ul><p>number</p>        </ul></details><details id="y$14" title="Property" ><summary><span><a href="#y$14">#</a></span>  <code><strong>y</strong></code>    </summary>  <a href="src/index.ts#L6">src/index.ts#L6</a>  <ul><p>number</p>        </ul></details></p>}</p>        </ul></details>  <p><strong>getRelativeMouse</strong><em>(el, { x, y })</em>  &nbsp;=&gt;  <ul>{<p>  <details id="x$16" title="Property" ><summary><span><a href="#x$16">#</a></span>  <code><strong>x</strong></code>    </summary>    <ul><p>number</p>        </ul></details><details id="y$17" title="Property" ><summary><span><a href="#y$17">#</a></span>  <code><strong>y</strong></code>    </summary>    <ul><p>number</p>        </ul></details></p>}</ul></p></p>    </ul></details><details id="getRelativeMouseFromEvent$1" title="Function" open><summary><span><a href="#getRelativeMouseFromEvent$1">#</a></span>  <code><strong>getRelativeMouseFromEvent</strong></code><em>(el, event)</em>    </summary>  <a href="src/index.ts#L3">src/index.ts#L3</a>  <ul>    <p>    <details id="el$3" title="Parameter" ><summary><span><a href="#el$3">#</a></span>  <code><strong>el</strong></code>    </summary>    <ul><p><span>HTMLElement</span></p>        </ul></details><details id="event$4" title="Parameter" ><summary><span><a href="#event$4">#</a></span>  <code><strong>event</strong></code>    </summary>    <ul><p><span>MouseEvent</span> | <span>PointerEvent</span></p>        </ul></details>  <p><strong>getRelativeMouseFromEvent</strong><em>(el, event)</em>  &nbsp;=&gt;  <ul>{<p>  <details id="x$6" title="Property" ><summary><span><a href="#x$6">#</a></span>  <code><strong>x</strong></code>    </summary>    <ul><p>number</p>        </ul></details><details id="y$7" title="Property" ><summary><span><a href="#y$7">#</a></span>  <code><strong>y</strong></code>    </summary>    <ul><p>number</p>        </ul></details></p>}</ul></p></p>    </ul></details></p>

## Credits

- [get-element-offset](https://npmjs.org/package/get-element-offset) by [stagas](https://github.com/stagas) &ndash; Get accurate DOM element offset.

## Contributing

[Fork](https://github.com/stagas/relative-mouse/fork) or [edit](https://github.dev/stagas/relative-mouse) and submit a PR.

All contributions are welcome!

## License

<a href="LICENSE">MIT</a> &copy; 2022 [stagas](https://github.com/stagas)
