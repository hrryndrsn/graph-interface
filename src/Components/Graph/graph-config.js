/*
  Example config for GraphView component
*/
import React from 'react';

const EmptyShape = (
  <symbol viewBox="0 0 100 100" id="empty">
    <rect x="5" y="10" width="120" height="70"></rect>
  </symbol>
)

const RectNode = (
  <symbol viewBox="0 0 100 100">
    <rect transform="translate(50) rotate(45)" width="70" height="70"></rect>
  </symbol>
)

const SpecialShape = (
  <symbol viewBox="0 0 100 100" id="special">
    <rect transform="translate(50) rotate(45)" width="70" height="70"></rect>
  </symbol>
)

const SpecialChildShape = (
  <symbol viewBox="0 0 100 100" id="specialChild">
    <rect x="2.5" y="0" width="95" height="97.5" fill="rgba(30, 144, 255, 0.12)"></rect>
  </symbol>
)

const EmptyEdgeShape = (
  <symbol viewBox="0 0 50 50" id="emptyEdge">
    
  </symbol>
)

const SpecialEdgeShape = (
  <symbol viewBox="0 0 50 50" id="specialEdge">
    <rect transform="rotate(45)"  x="25" y="-4.5" width="15" height="15" fill="currentColor"></rect>
  </symbol>
)

export default {
  NodeTypes: {
    empty: {
      typeText: "empty",
      shapeId: "#empty",
      shape: EmptyShape
    },
    stage: {
      typeText: "stage",
      shapeId: "#empty",
      shape: EmptyShape
    },
    special: {
      typeText: "Special",
      shapeId: "#special",
      shape: SpecialShape
    }
  }, 
  NodeSubtypes: {
    specialChild: {
      shapeId: "#specialChild",
      shape: SpecialChildShape
    }
  }, 
  EdgeTypes: {
    emptyEdge: {
      shapeId: "#emptyEdge",
      shape: EmptyEdgeShape
    },
    specialEdge: {
      shapeId: "#specialEdge",
      shape: SpecialEdgeShape
    }
  }
}