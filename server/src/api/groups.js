import express from "express";
import GroupTask from "../tasks/groups.js";

const route = express.Router();

route.get("/", async (req, res) => {
    // 获取所有用户组以及权限详情

    const GroupManage = new GroupTask();
    const queryGroupsResult = await GroupManage.getAllGroup();
    res.json(queryGroupsResult);
});

export default route;