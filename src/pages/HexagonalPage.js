import React, { useState } from "react";
import Card from "../components/Card";
import {
  Hexagonal6ommm,
  Hexagonal6barm2,
  Hexagonal6mm,
  Hexagonal6om,
  Hexagonal622,
  Hexagonal6bar,
  Hexagonal6,
} from "../components/groups/Hexagonal";

function HexagonalPage() {
  return (
    <div className="home-main">
      <div className="home-grid">
        <Card
          title="6"
          button_text="explore"
          route="/hexagonal/6"
          left_side="Group Order: "
          group_name="6"
        >
          <Hexagonal6 />
        </Card>
        <Card
          title={
            <>
              <span style={{ textDecoration: "overline" }}>6</span>
            </>
          }
          button_text="explore"
          route="/hexagonal/6bar"
          left_side="Group Order: "
          group_name="6"
        >
          <Hexagonal6bar />
        </Card>
        <Card
          title="622"
          button_text="explore"
          route="/hexagonal/622"
          left_side="Group Order: "
          group_name="12"
        >
          <Hexagonal622 />
        </Card>
        <Card
          title="6/m"
          button_text="explore"
          route="/hexagonal/6om"
          left_side="Group Order: "
          group_name="12"
        >
          <Hexagonal6om />
        </Card>
        <Card
          title="6mm"
          button_text="explore"
          route="/hexagonal/6mm"
          left_side="Group Order: "
          group_name="12"
        >
          <Hexagonal6mm />
        </Card>
        <Card
          title={
            <>
              <span style={{ textDecoration: "overline" }}>6</span>m2
            </>
          }
          button_text="explore"
          route="/hexagonal/6barm2"
          left_side="Group Order: "
          group_name="12"
        >
          <Hexagonal6barm2 />
        </Card>
        <Card
          title="6/mmm"
          button_text="explore"
          route="/hexagonal/6ommm"
          left_side="Group Order: "
          group_name="24"
        >
          <Hexagonal6ommm />
        </Card>
      </div>
    </div>
  );
}

export default HexagonalPage;
