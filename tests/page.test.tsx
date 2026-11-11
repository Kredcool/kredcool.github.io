import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import EtaliStickers from "../app/Etali_Stickers/page";

describe("Etali stickers page", () => {
  it("generates and displays three sticker sets", () => {
    render(<EtaliStickers />);

    expect(screen.getByText("Push 'Check Set' button")).toBeTruthy();
    fireEvent.click(screen.getByRole("button", { name: "Generate Name" }));

    expect(screen.getAllByRole("article")).toHaveLength(3);
    expect(screen.getAllByText("max!").length).toBeGreaterThan(0);
  });
});
