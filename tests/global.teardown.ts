import { FullConfig } from "@playwright/test";
import { UserController } from "./hw-18-api/controllers/Users/UserController";
import { request, expect } from "@playwright/test";

export default async function globalSetup(config: FullConfig) {
    console.log("Test execution finished");
}