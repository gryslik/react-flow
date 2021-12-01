import React, { DragEvent } from 'react';

const onDragStart = (event: DragEvent, nodeType: string) => {
  event.dataTransfer.setData('application/reactflow', nodeType);
  event.dataTransfer.effectAllowed = 'move';
};

const Sidebar = () => {
  return (
    <aside>
      <div className="description">You can drag these nodes to the pane on the left.</div>
      <div className="react-flow__node-input" onDragStart={(event: DragEvent) => onDragStart(event, 'input')} draggable>
        input Node
      </div>
      <div className="react-flow__node-default" onDragStart={(event: DragEvent) => onDragStart(event, 'default')} draggable>
        default Node
      </div>
      <div className="react-flow__node-output" onDragStart={(event: DragEvent) => onDragStart(event, 'output')} draggable>
        output Node
      </div>
    </aside>
  );
};

export default Sidebar;
