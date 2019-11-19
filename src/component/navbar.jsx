import React from "react";
function Barre(props) {
  return (
    <div>
      <ul className="format">
        {props.item.map(el => (
          <li>
            {el.title}
            {el.sousitems &&
            <div className="tar9i3">
                 {el.sousitems.map(y => (
                <div className="dropdawn">
                  <span>{y}</span>
                </div>
              ))}
            </div>
             }
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Barre;
